package com.example.assig1.sensors.controller;

import com.example.assig1.sensors.SensorService;
import com.example.assig1.sensors.dto.SensorDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.assig1.UrlMapping.*;

@RequestMapping(SENSORS)
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
public class SensorController {
    private final SensorService sensorService;

    @GetMapping()
    public List<SensorDTO> allSensors() { return sensorService.allSensors();}

    @PostMapping()
    public SensorDTO createSensor(@RequestBody SensorDTO sensorDTO){
        return sensorService.create(sensorDTO);
    }

    @PutMapping(ENTITY)
    public SensorDTO updateSensor(@PathVariable Long id, @RequestBody SensorDTO sensorDTO){
        return sensorService.update(id, sensorDTO);
    }

    @DeleteMapping()
    public void deleteAll(){
        sensorService.deleteAll();
    }

    @DeleteMapping(ENTITY)
    public void deleteSensor(@PathVariable Long id){
        sensorService.deleteById(id);
    }

    @GetMapping(CLIENTS + ENTITY )
    public List<SensorDTO> allSensorsForDevice(@PathVariable Long id){
        return sensorService.allSensorsForDevice(id);
    }
}
