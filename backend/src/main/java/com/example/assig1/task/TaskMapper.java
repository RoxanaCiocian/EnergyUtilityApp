package com.example.assig1.task;

public class TaskMapper {
    public static TaskDTO toDTO(Task task){
        if(task == null) {
            return  null;
        }
        TaskDTO taskDTO = TaskDTO.builder()
                .id(task.getId())
                .description(task.getDescription())
                .assignee(task.getAssignee())
                .current_status(task.getCurrent_status())
                .estimation_man_days(task.getEstimation_man_days())
                .actual_time_spent(task.getActual_time_spent())
                .start_date(task.getStart_date())
                .complete_date(task.getComplete_date())
                .build();
        return taskDTO;
    }

    public Task fromDTO(TaskDTO taskDTO){
        if(taskDTO == null){
            return null;
        }
        Task task = Task.builder()
                .id(taskDTO.getId())
                .description(taskDTO.getDescription())
                .assignee(taskDTO.getAssignee())
                .current_status(taskDTO.getCurrent_status())
                .estimation_man_days(taskDTO.getEstimation_man_days())
                .actual_time_spent(taskDTO.getActual_time_spent())
                .start_date(taskDTO.getStart_date())
                .complete_date(taskDTO.getComplete_date())
                .build();
        return task;
    }
}
