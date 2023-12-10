package com.example.assig1.task;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    public Task findById(Integer id){
        return taskRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Task not found with id: " + id));
    }

    public List<TaskDTO> findAllTasks(){
        return taskRepository.findAll()
                .stream().map(TaskMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<TaskDTO> findAllTasksByAssigneeAndCurrentStatus(Assignee assignee, ESatus current_status){
        return taskRepository.findAllByAssigneeAndCurrent_status(assignee, current_status)
                .stream()
                .collect(Collectors.toList());
    }

    public TaskDTO addTask(TaskDTO taskDTO){
        return TaskMapper.toDTO(taskRepository.save(Task.builder()
                .description(taskDTO.getDescription())
                .assignee(taskDTO.getAssignee())
                .current_status(taskDTO.getCurrent_status())
                .estimation_man_days(taskDTO.getEstimation_man_days())
                .start_date(taskDTO.getStart_date())
                .complete_date(taskDTO.getComplete_date())
                .build()));
    }

    public TaskDTO updateTask(Integer id, TaskDTO taskDTO){
        Task task = findById(id);

        task.setDescription(taskDTO.getDescription());
        task.setAssignee(taskDTO.getAssignee());
        task.setEstimation_man_days(taskDTO.getEstimation_man_days());
        task.setCurrent_status(taskDTO.getCurrent_status());
        task.setStart_date(taskDTO.getStart_date());
        task.setComplete_date(taskDTO.getComplete_date());

        return TaskMapper.toDTO(taskRepository.save(task));
    }

    public void removeTask(Integer id){
        taskRepository.deleteById(id);
    }

    public List<TaskDTO> startedTasks(){
        List<TaskDTO> startedTasks = taskRepository.findAll()
                .stream().filter(task -> task.getStart_date() != null)
                .map(TaskMapper::toDTO)
                .collect(Collectors.toList());

        return startedTasks;
    }
}
