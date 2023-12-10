package com.example.assig1.hessianserver;

import com.example.assig1.values.dto.MonitoredValuesDTO;
import com.example.assig1.values.model.MonitoredValues;

import java.util.List;

public interface HessianServer {
    public List<MonitoredValuesDTO> sendValues();
    //public String sayHelloWithHessian(String msg);
}
