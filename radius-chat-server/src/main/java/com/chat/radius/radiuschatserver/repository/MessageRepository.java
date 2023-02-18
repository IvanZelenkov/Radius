package com.chat.radius.radiuschatserver.repository;

import com.chat.radius.radiuschatserver.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
/* JpaRepository is a JPA (Java Persistence API) specific extension of Repository.
It contains the full API of CrudRepository and PagingAndSortingRepository.
So it contains API for basic CRUD operations and also API for pagination and sorting. */
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findAllByRoom(String room);
}