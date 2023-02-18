package com.chat.radius.radiuschatserver.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Message extends BaseModel {

    @Enumerated(EnumType.STRING)
    private MessageType messageType;

    private String room;
    private String username;
    private String content;
}