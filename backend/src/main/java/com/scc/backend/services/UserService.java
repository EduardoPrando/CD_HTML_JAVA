package com.scc.backend.services;

import java.util.List;
import java.util.Optional;

// import javax.transaction.Transactional;

import com.scc.backend.models.UserModel;
import com.scc.backend.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  
  @Autowired
  final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  // @Transactional
  public UserModel save(UserModel user) {
    return userRepository.save(user);
  }

  // @Transactional
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
