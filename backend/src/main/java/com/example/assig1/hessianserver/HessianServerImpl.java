package com.example.assig1.hessianserver;

import com.example.assig1.values.MonitoredValuesRepository;
import com.example.assig1.values.MonitoredValuesService;
import com.example.assig1.values.dto.MonitoredValuesDTO;
import com.example.assig1.values.model.MonitoredValues;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@RequiredArgsConstructor
public class HessianServerImpl implements HessianServer {
    private final MonitoredValuesService monitoredValuesService;

    @Override
    public List<MonitoredValuesDTO> sendValues(){
        System.out.println("*********SERVER SIDE**********");
        System.out.println("Values: " + monitoredValuesService.allValues().toString());
        List<MonitoredValuesDTO> newList = monitoredValuesService.allValues();
        return newList;
    }
//public String sayHelloWithHessian(String msg) {
//    System.out.println("=============server side==============");
//    System.out.println("msg : " + msg);
//    return "Hello " + msg + " Response time :: " + new Date();
//}
}
