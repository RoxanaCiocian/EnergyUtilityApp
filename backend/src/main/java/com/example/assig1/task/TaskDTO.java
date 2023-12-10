package com.example.assig1.task;

import lombok.*;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TaskDTO {
    private Integer id;
    private String description;
    private int estimation_man_days;
    private int actual_time_spent;
    private ESatus current_status;
    private Assignee assignee;
    private Date start_date;
    private Date complete_date;
}
