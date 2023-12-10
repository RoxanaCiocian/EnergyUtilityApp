package com.example.assig1.task;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Service
@AllArgsConstructor
public class CsvReport {
    private final TaskService taskService;
    private final String columns = "Started tasks, Completed tasks, Velocity of team";
    public String export() {
        List<TaskDTO> startedTasks = taskService.startedTasks();
        StringBuilder sb = new StringBuilder();
        sb.append(columns);

        try (PrintWriter writer = new PrintWriter(new File("Report.csv"))) {

           sb.append(startedTasks.size());
           sb.append(", ");

            writer.write(sb.toString());

            System.out.println("done!");

        } catch ( FileNotFoundException e) {
            e.printStackTrace();
            return "Failed CSV Report";
        }
        return "Report.csv";
}
