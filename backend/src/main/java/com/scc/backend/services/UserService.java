package com.scc.backend.services;

import java.util.List;
import java.util.Optional;

import com.scc.backend.models.UserModel;
import com.scc.backend.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  
  @Autowired
  final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public UserModel save(UserModel user) {
    return userRepository.save(user);
  }

  public void delete(UserModel user) {
    userRepository.delete(user);
  }

  public List<UserModel> findAll() {
    return userRepository.findAll();
  }

  public Optional<UserModel> findById(String id) {
    return userRepository.findById(id);
  }
}
