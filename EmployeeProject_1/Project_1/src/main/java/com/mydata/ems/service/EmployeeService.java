package com.mydata.ems.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mydata.ems.dto.EmployeeDto;
import com.mydata.ems.exception.ResourceNotFoundException;
@Service
public interface EmployeeService {

	public EmployeeDto getEmployeeById(Long empId) throws ResourceNotFoundException;

	public EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	public List<EmployeeDto> getAllEmployees();

//	EmployeeDto getEmployeeById(Long id, Long empId) throws ResourceNotFoundException;
	
	public EmployeeDto updateEmployee(Long id,EmployeeDto ed) throws ResourceNotFoundException;
	
	
	public void deleteEmployee(Long id) throws ResourceNotFoundException; 
	
}
