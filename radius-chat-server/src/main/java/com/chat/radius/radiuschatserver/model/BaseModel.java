package com.chat.radius.radiuschatserver.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@MappedSuperclass
public abstract class BaseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Prevent storing null values in the underlying database
    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Date createdDateTime;
}