package com.example.assig1.values;

import com.example.assig1.sensors.SensorService;
import com.example.assig1.sensors.model.Sensor;
import com.example.assig1.values.dto.MonitoredValuesDTO;
import com.example.assig1.values.mapper.ValuesMapperFunc;
import com.example.assig1.values.model.MonitoredValues;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MonitoredValuesService {
    private final MonitoredValuesRepository monitoredValuesRepository;
    private final SensorService sensorService;
    private final SimpMessageSendingOperations messagingTemplate;
    double initValue = 0.0;

    Double initTimestamp = 0.0;

    double peak;

    public MonitoredValues findById(Long id){
        return monitoredValuesRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("MonitoredValue not found with id:" + id));

    }

    public List<MonitoredValuesDTO> allValues(){
        return monitoredValuesRepository.findAll()
                .stream().map(ValuesMapperFunc::toDTO)
                .collect(Collectors.toList());
    }

    public List<MonitoredValuesDTO> allValuesForSensor(Long id){
        return monitoredValuesRepository.findBySensorId(id)
                .stream().map(ValuesMapperFunc::toDTO)
                .collect(Collectors.toList());
    }

    public MonitoredValuesDTO create(MonitoredValuesDTO monitoredValuesDTO){
        Sensor sensor = sensorService.findById(monitoredValuesDTO.getSensorId());
        return ValuesMapperFunc.toDTO(monitoredValuesRepository.save(MonitoredValues.builder()
                .timeStamp(monitoredValuesDTO.getTimeStamp())
                .value(monitoredValuesDTO.getValue())
                .sensorId(sensor)
                .build()));
    }
    public void computePeak(MonitoredValuesDTO monitoredValue) {

        Sensor s = sensorService.findById(monitoredValue.getSensorId());

        MonitoredValues newMonitoredValue = new MonitoredValues();
            newMonitoredValue.setSensorId(s);
            newMonitoredValue.setTimeStamp(monitoredValue.getTimeStamp());
            newMonitoredValue.setValue(monitoredValue.getValue());

           // monitoredValuesRepository.save(newMonitoredValue);
        System.out.println(monitoredValue);

//        Date itemDate = new Date(monitoredValue.getTimeStamp());
////or alternatively you can do
////Date itemDate = new Date((long)1500322822 * 1000);
//        String text = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss a").format(itemDate);
//
//        peak =( (monitoredValue.getValue() - initValue) / time.getTi - initTimestamp ) * 100000;
//
//        if(peak > s.getMaxValue()) {
//
//            newBookingForCustomer(SensorMapperFunc.toDTO(s));
//        }
//        initValue = monitoredValue.getValue();
//        initTimestamp = time;

    }

}
