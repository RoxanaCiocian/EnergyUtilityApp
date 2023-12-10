package com.example.assig1.values.controller;

import com.example.assig1.values.MonitoredValuesService;
import com.example.assig1.values.dto.MonitoredValuesDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.assig1.UrlMapping.*;

@RequestMapping(VALUES)
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
public class MonitoredValuesController {
    private final MonitoredValuesService monitoredValuesService;

    @GetMapping
    public List<MonitoredValuesDTO> allValues(){
        return monitoredValuesService.allValues();
    }

    @GetMapping(ENTITY)
    public List<MonitoredValuesDTO> allValuesForDevice(@PathVariable Long id) { return monitoredValuesService.allValuesForSensor(id);}
}
