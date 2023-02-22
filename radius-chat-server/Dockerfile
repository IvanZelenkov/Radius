### Stage 1: Build the application
FROM openjdk:17.0.2 as build

# Set the current working directory inside the image
WORKDIR /app

# Copy maven executable to the image
COPY mvnw .
COPY .mvn .mvn

# Copy pom.xml
COPY pom.xml .

# Build all the dependencies in preparation to go offline
# (assuming we won't have internet access in the future, just
# copy everything to make sure everything is on this machine).
# This is a separate step so the dependencies will be cached unless
# the pom.xml changed.
RUN ./mvnw dependency:go-offline

# Copy the project source
COPY src src

# Package the application
RUN ./mvnw package
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

# Stage 2: A minimal docker image with command to run the app
FROM openjdk:17.0.2

ARG DEPENDENCY=/app/target/dependency

# Copy project dependencies from the build stage
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

ENTRYPOINT ["java", "-cp", "app:app/lib/*", "com.chat.radius.radiuschatserver.RadiusChatServerApplication"]