	package com.mydata.ems.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mydata.ems.dto.EmployeeDto;
import com.mydata.ems.entity.Employee;
import com.mydata.ems.exception.ResourceNotFoundException;
import com.mydata.ems.mapper.EmployeeMapper;
import com.mydata.ems.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	private EmployeeRepository employeeRepository;
	//conctructor id
	
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		super();
		this.employeeRepository = employeeRepository;
	}
	
	
	@Override
	public EmployeeDto getEmployeeById(Long empId) throws ResourceNotFoundException {
		 Employee emp=employeeRepository.findById(empId)
				   .orElseThrow(() ->new ResourceNotFoundException("Employee is not exit with given Id:"+empId));
		     return EmployeeMapper.mapToEmployee(emp);		                      
	}
	
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee=EmployeeMapper.maptoEmployee(employeeDto);
		Employee savedEmployee=employeeRepository.save(employee);
		EmployeeDto edto=EmployeeMapper.mapToEmployee(savedEmployee);
		return edto;
	}
	
	
	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> allEmp=employeeRepository.findAll();
		//List<EmployeeDto>upEmp=new ArrayList();
		//allEmp---iterator---Employee---convert/map---EmployeeDto---addupEmp
		return allEmp.stream().map((Employees)->EmployeeMapper.mapToEmployee(Employees))
				.collect (Collectors.toList());

	}
	
	
	@Override
	public EmployeeDto updateEmployee(Long id, EmployeeDto ed) throws ResourceNotFoundException {
		//find by id have jpa entity object  will transfer database entity
		Employee e=employeeRepository.findById(id).orElseThrow(
				()->new ResourceNotFoundException("employee is not exist with given Id:"+id));
		e.setFirstName(ed.getFirstName());
		e.setLastName(ed.getLastName());
		e.setEmail(ed.getEmail());
		Employee updatedEmp=employeeRepository.save(e);
		return EmployeeMapper.mapToEmployee(updatedEmp);
	}
	
	
	@Override
	public void deleteEmployee(Long id) throws ResourceNotFoundException {
		//if that id doesnt exist,then internally implicit exception handler will be used
		Employee e=employeeRepository.findById(id).orElseThrow(
				()->new ResourceNotFoundException("Employee is Not Exit with given Id:"+id));
		employeeRepository.deleteById(id);
		
	}
	
	
}
