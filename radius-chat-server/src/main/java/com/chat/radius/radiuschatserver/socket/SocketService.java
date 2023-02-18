package com.chat.radius.radiuschatserver.socket;

import com.corundumstudio.socketio.SocketIOClient;
import com.chat.radius.radiuschatserver.model.Message;
import com.chat.radius.radiuschatserver.model.MessageType;
import com.chat.radius.radiuschatserver.service.MessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class SocketService {

    private final MessageService messageService;

    public void sendMessage(SocketIOClient socketIOClient, Message message, String room) {
        for (SocketIOClient client : socketIOClient.getNamespace().getRoomOperations(room).getClients())
            if (!client.getSessionId().equals((socketIOClient.getSessionId())))
                client.sendEvent("read_message", message);
    }

    public void saveMessage(SocketIOClient socketIOClient, Message message) {
        Message storedMessage = messageService.saveMessage(Message.builder()
                .messageType(MessageType.CLIENT)
                .content(message.getContent())
                .room(message.getRoom())
                .username(message.getUsername())
                .build()
        );

        sendMessage(socketIOClient, storedMessage, message.getRoom());
    }

    public void saveInfoMessage(SocketIOClient socketIOClient, String message, String room) {
        Message storedMessage = messageService.saveMessage(Message.builder()
                .messageType(MessageType.SERVER)
                .content(message)
                .room(room)
                .build());

        sendMessage(socketIOClient, storedMessage, room);
    }
}