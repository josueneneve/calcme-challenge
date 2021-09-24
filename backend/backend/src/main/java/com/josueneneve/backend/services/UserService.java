package com.josueneneve.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.josueneneve.backend.domain.User;
import com.josueneneve.backend.dto.UserDTO;
import com.josueneneve.backend.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repo;

	public User insert(User obj) {
		return repo.insert(obj);
	}

	public User fromDTO(UserDTO objDto) {
		return new User(objDto.getId(), objDto.getName(), objDto.getEmail(), objDto.gettelephone());
	}
}
