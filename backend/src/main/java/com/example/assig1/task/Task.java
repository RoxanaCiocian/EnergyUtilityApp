package com.example.assig1.task;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Data
@ToString
public class Task {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false, length = 120)
    private String description;

    @Column(nullable = false)
    private int estimation_man_days;

    @Column(nullable = false)
    private int actual_time_spent;

    @Column(nullable = false)
    private ESatus current_status;

    @ManyToOne
    private Assignee assignee;

    @Column(nullable = false)
    private Date start_date;

    @Column(nullable = false)
    private Date complete_date;
}
