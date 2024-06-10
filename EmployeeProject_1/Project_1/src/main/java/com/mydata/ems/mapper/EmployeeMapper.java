package com.mydata.ems.mapper;

import com.mydata.ems.dto.EmployeeDto;
import com.mydata.ems.entity.Employee;

public class EmployeeMapper {
	public static EmployeeDto mapToEmployee(Employee employees)
	{
		return new EmployeeDto(employees.getId(),employees.getFirstName(),employees.getLastName(),employees.getEmail());
		
	}
	public static Employee maptoEmployee(EmployeeDto eDto)
	{
		return new Employee (eDto.getId(),eDto.getFirstName(),eDto.getLastName(),eDto.getEmail());
	}
	public static EmployeeDto mapToEmployeeDto(Employee updateEmp) {
		// TODO Auto-generated method stub
		return null;
	}
}
