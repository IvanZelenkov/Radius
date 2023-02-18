package com.chat.radius.radiuschatserver.configuration;

import com.corundumstudio.socketio.SocketIOServer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@RequiredArgsConstructor
/* CommandLineRunner is a simple Spring Boot interface with a run method.
   Spring Boot will automatically call the run method of all beans implementing
   this interface after the application context has been loaded.
*/
public class ServerCommandLineRunner implements CommandLineRunner {

    private final SocketIOServer server;

    @Override
    public void run(String... args) {
        server.start();
    }
}