package com.example.assig1;

import com.example.assig1.devices.DeviceRepository;
import com.example.assig1.devices.DeviceService;
import com.example.assig1.devices.dto.DeviceDTO;
import com.example.assig1.devices.model.Device;
import com.example.assig1.rabbitmq.RabbitMQConsumer;
import com.example.assig1.security.AuthService;
import com.example.assig1.security.dto.SignupRequest;
import com.example.assig1.sensors.SensorRepository;
import com.example.assig1.sensors.SensorService;
import com.example.assig1.sensors.dto.SensorDTO;
import com.example.assig1.sensors.model.Sensor;
import com.example.assig1.user.RoleRepository;
import com.example.assig1.user.UserRepository;
import com.example.assig1.user.UserService;
import com.example.assig1.user.dto.UserListDTO;
import com.example.assig1.user.model.ERole;
import com.example.assig1.user.model.Person;
import com.example.assig1.user.model.Role;
import com.example.assig1.values.MonitoredValuesRepository;
import com.example.assig1.values.MonitoredValuesService;
import com.example.assig1.values.dto.MonitoredValuesDTO;
import com.example.assig1.values.model.MonitoredValues;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityNotFoundException;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Component
@RequiredArgsConstructor
public class Bootstrapper implements ApplicationListener<ApplicationReadyEvent>  {
    private final RoleRepository roleRepository;

    private final UserRepository userRepository;

    private final DeviceRepository deviceRepository;

    private final SensorRepository sensorRepository;

    private final MonitoredValuesRepository monitoredValuesRepository;

    private final UserService userService;

    private final DeviceService deviceService;

    private final SensorService sensorService;

    private final MonitoredValuesService monitoredValuesService;

    private final AuthService authService;

    private final RabbitMQConsumer rabbitMQConsumer;

    @Value("${app.bootstrap}")
    private Boolean bootstrap;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event){
        if (bootstrap) {
            sensorRepository.deleteAll();
            deviceRepository.deleteAll();
            userRepository.deleteAll();
            roleRepository.deleteAll();


            for (ERole value : ERole.values()) {
                roleRepository.save(
                        Role.builder()
                                .name(value)
                                .build()
                );
            }
            List<String> admin = new ArrayList<>();
            admin.add("ADMIN");
            authService.register(SignupRequest.builder()
                    .username("admin")
                    .password("admin")
                    .name("Ana")
                    .address("str. Crangului, nr. 27")
                    .birthday("18-10-2002")
                    .roles(admin)
                    .build());
            authService.register(SignupRequest.builder()
                    .username("client1")
                    .password("client1")
                    .name("Maria")
                    .address("str. Victoriei, nr.3")
                    .birthday("02-05-1999")
                    .build());
            UserListDTO user = UserListDTO.builder()
                    .username("client2")
                    .name("Alina")
                    .password("client2")
                    .address("str. Florilor, nr. 43")
                    .birthday("23-08-2000")
                    .build();
            userService.create(user);

            Person pers = userRepository.findByUsername("admin")
                    .orElseThrow(() -> new EntityNotFoundException("User Not Found with username: "));
            Person pers1 = userRepository.findByUsername("client1")
                    .orElseThrow(() -> new EntityNotFoundException("User Not Found with username: "));
            Person pers2 = userRepository.findByUsername("client2")
                    .orElseThrow(() -> new EntityNotFoundException("User Not Found with username: "));
            DeviceDTO deviceDTO = DeviceDTO.builder()
                    .description("device1")
                    .location("living")
                    .baseline(10)
                    .maxEnergyConsumption(23)
                    .userId(pers.getId())
                    .build();
            deviceService.create(deviceDTO);

            DeviceDTO deviceDTO1 = DeviceDTO.builder()
                    .description("device2")
                    .location("kitchen")
                    .baseline(10)
                    .maxEnergyConsumption(30)
                    .userId(pers1.getId())
                    .build();
            deviceService.create(deviceDTO1);

            DeviceDTO deviceDTO2 = DeviceDTO.builder()
                    .description("device3")
                    .location("bathroom")
                    .baseline(10)
                    .maxEnergyConsumption(17)
                    .userId(pers2.getId())
                    .build();
            deviceService.create(deviceDTO2);

            System.out.println(deviceService.allDevicesForUser(pers1.getId()));

            Device device = deviceRepository.findByDescription(deviceDTO.getDescription())
                    .orElseThrow(() -> new EntityNotFoundException("Device not found with device1:" + deviceDTO.getDescription()));

            Device device1 = deviceRepository.findByDescription(deviceDTO1.getDescription())
                    .orElseThrow(() -> new EntityNotFoundException("Device not found with device2:" + deviceDTO1.getDescription()));

            Device device2 = deviceRepository.findByDescription(deviceDTO2.getDescription())
                    .orElseThrow(() -> new EntityNotFoundException("Device not found with device3:" + deviceDTO2.getDescription()));

            SensorDTO sensorDTO = SensorDTO.builder()
                    .description("Sensor for device1")
                    .maxValue(50)
                    .deviceId(device.getId())
                    .build();
            sensorService.create(sensorDTO);
            SensorDTO sensorDTO1 = SensorDTO.builder()
                    .description("Sensor for device2")
                    .maxValue(50)
                    .deviceId(device1.getId())
                    .build();
            sensorService.create(sensorDTO1);
            SensorDTO sensorDTO2 = SensorDTO.builder()
                    .description("Sensor for device3")
                    .maxValue(50)
                    .deviceId(device2.getId())
                    .build();
            sensorService.create(sensorDTO2);
            Sensor sensor = sensorRepository.findByDescription(sensorDTO.getDescription())
                    .orElseThrow(() -> new EntityNotFoundException("Sensor not foubd with id:" + sensorDTO.getDescription()));

            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Calendar calendar = Calendar.getInstance();
            for(int i = 1; i < 8; i++){
                calendar = Calendar.getInstance();
                calendar.add(Calendar.DATE, -i);
                for(int j = 1; j < 25; j++){
                    calendar.set(Calendar.HOUR_OF_DAY, j);
                    Random random = new Random();
                    Double randVal = 0 + (50 - 0) * random.nextDouble();
                    MonitoredValuesDTO monitoredValuesDTO = MonitoredValuesDTO.builder()
                            .value(randVal)
                            .timeStamp(dateFormat.format(calendar.getTime()))
                            .sensorId(8L)
                            .build();
                    monitoredValuesService.create(monitoredValuesDTO);
                }

            }
            int size = monitoredValuesService.allValues().size();
            Double sum=0D;
            String str = "01";
            for(int a=0; a<size;a++){

                if(monitoredValuesService.allValues().get(a).getTimeStamp().substring(11,13).equals(str)){
                    sum = sum + monitoredValuesService.allValues().get(a).getValue();
                    System.out.println("!!!!!!PE PARCURS  " + monitoredValuesService.allValues().get(a).getValue());
                }
            }
            System.out.println(sum);




//            MonitoredValuesDTO monitoredValuesDTO = MonitoredValuesDTO.builder()
//                    .timeStamp(Timestamp.valueOf(LocalDateTime.now()).toString())
//                    .value(223.1d)
//                    .sensorId(sensor.getId())
//                    .build();
//            monitoredValuesService.create(monitoredValuesDTO);

//            try {
//                rabbitMQConsumer.getMessageQueue();
//            } catch (Exception e) {
//                e.printStackTrace();
//            }

        }
    }
}
