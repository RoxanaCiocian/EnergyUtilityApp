package com.example.assig1.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
    @Query(value = "select * from Task task where task.assignee = ?1 and task.current_status = ?2", nativeQuery = true)
    List<TaskDTO> findAllByAssigneeAndCurrent_status(Assignee Assignee, ESatus current_status);
}
