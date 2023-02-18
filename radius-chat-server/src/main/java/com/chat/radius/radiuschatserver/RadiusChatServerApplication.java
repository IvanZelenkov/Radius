package com.chat.radius.radiuschatserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RadiusChatServerApplication {

    public static void main(String[] args) {
        // SpringApplication.run bootstraps a spring application as
        // a stand-alone application from the main method. It creates
        // an appropriate ApplicationContext instance and load beans.
        // It also runs embedded Tomcat server in Spring web application.
        SpringApplication.run(RadiusChatServerApplication.class, args);
    }

}