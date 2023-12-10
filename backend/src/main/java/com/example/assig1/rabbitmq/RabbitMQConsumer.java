package com.example.assig1.rabbitmq;

import com.example.assig1.sensors.SensorService;
import com.example.assig1.sensors.dto.SensorDTO;
import com.example.assig1.sensors.mapper.SensorMapperFunc;
import com.example.assig1.sensors.model.Sensor;
import com.example.assig1.values.MonitoredValuesRepository;
import com.example.assig1.values.MonitoredValuesService;
import com.example.assig1.values.dto.MonitoredValuesDTO;
import com.example.assig1.websocket.OutputMessage;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;
import lombok.AllArgsConstructor;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@Component
@EnableScheduling
public class RabbitMQConsumer {
    private final MonitoredValuesService monitoredValuesService;
    private final SensorService sensorService;
    private final List<Double> values = new ArrayList<>();
    private final List<Double> timestamps = new ArrayList<>();
    private final SimpMessageSendingOperations messagingTemplate;

    public void getMessageQueue() throws Exception{
        String uri = System.getenv("CLOUDAMQP_URL");
        if (uri == null) uri = "amqps://liybwhkl:SDj8wfql3ESbXsFjj6P8emk9bT7fmh3s@roedeer.rmq.cloudamqp.com/liybwhkl";

        ConnectionFactory factory = new ConnectionFactory();
        factory.setUri(uri);

        //Recommended settings
        factory.setConnectionTimeout(30000);

        Connection connection = factory.newConnection();
        Channel channel = connection.createChannel();

        String queue = "hello";
        boolean durable = false;
        boolean exclusive = false;
        boolean autoDelete = false;

        channel.queueDeclare(queue, durable, exclusive, autoDelete, null);

        DeliverCallback deliverCallback = (consumerTag, delivery) -> {

            String message = new String(delivery.getBody(), "UTF-8");

            JSONObject obj1;
            try {
                obj1 = new JSONObject(message);
                DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                MonitoredValuesDTO monitoredValuesDTO = monitoredValuesService.create(MonitoredValuesDTO.builder()
                        .value(Double.valueOf(obj1.getDouble("value")))
                        .timeStamp(dateFormat.format(new Date(obj1.getLong("timestamp"))))
                        .sensorId(obj1.getLong("sensor_id"))
                        .build());

                Double value = obj1.getDouble("value");
                Double timestamp = obj1.getDouble("timestamp");
                values.add(value);
                timestamps.add(timestamp);

                computePeak(values, timestamps, monitoredValuesDTO);

            } catch (JSONException e) {
                e.printStackTrace();
            }


            System.out.println(" [x] Received '" + message + "'");
        };
        channel.basicConsume(queue, true, deliverCallback, consumerTag -> { });
    }

    public void computePeak(List<Double> values, List<Double> timestamps, MonitoredValuesDTO monitoredValuesDTO){
        Sensor s = sensorService.findById(monitoredValuesDTO.getSensorId());
        Integer i = values.size();

        if(values.size() >= 2 && timestamps.size()>=2){

            Double peak = (values.get(i-1) - values.get(i-2))/(timestamps.get(i-1) - timestamps.get(i-2)) * 100000;

            System.out.println("PEAK:" + peak);
            if (peak > s.getMaxValue()){
                System.out.println("MAXIMUM EXCEDEED !!!!!!");
                newBookingForCustomer(SensorMapperFunc.toDTO(s));
            }
        }

    }
    public void newBookingForCustomer(SensorDTO sensorDTO){
        messagingTemplate.convertAndSend("/sensors/client/values" , new OutputMessage("Maximum value exceeded!"));
    }
}


