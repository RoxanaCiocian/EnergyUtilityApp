package com.example.assig1.devices.controller;

import com.example.assig1.devices.DeviceService;
import com.example.assig1.devices.dto.DeviceDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.assig1.UrlMapping.*;

@RestController
@RequestMapping(DEVICES)
@RequiredArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
public class DeviceController {
    private final DeviceService deviceService;

    @GetMapping
    public List<DeviceDTO> allDevices(){
        return deviceService.allDevices();
    }

    @PostMapping
    public DeviceDTO createDevice(@RequestBody DeviceDTO deviceDTO){

        return deviceService.create(deviceDTO);
    }

    @PutMapping(ENTITY)
    public DeviceDTO updateDevice(@PathVariable Long id, @RequestBody DeviceDTO deviceDTO){
        return deviceService.update(id, deviceDTO);
    }

    @DeleteMapping
    public void deleteAll(){
        deviceService.deleteAll();
    }

    @DeleteMapping(ENTITY)
    public void deleteUser(@PathVariable Long id){
        deviceService.deleteById(id);
    }

    @GetMapping(CLIENTS + ENTITY)
    public List<DeviceDTO> allDevicesForUser(@PathVariable Long id){
        return deviceService.allDevicesForUser(id);
    }
}
