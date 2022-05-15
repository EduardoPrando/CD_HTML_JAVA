package com.scc.backend.controllers;

import java.util.List;
import java.util.Optional;

import com.scc.backend.dtos.UserDto;
import com.scc.backend.models.UserModel;
import com.scc.backend.services.UserService;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class UserController {
  
  final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping
  public ResponseEntity<Object> save(@RequestBody UserDto userDto) {
    var UserModel = new UserModel();
    BeanUtils.copyProperties(userDto, UserModel);
    return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(UserModel));
  }

  @GetMapping
  public ResponseEntity<List<UserModel>> getAllUser() {
    return ResponseEntity.status(HttpStatus.OK).body(userService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Object> getOneUser(@PathVariable(value = "id") String id) {
    Optional<UserModel> obj = userService.findById(id);
    if(!obj.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    return ResponseEntity.status(HttpStatus.OK).body(obj);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Object> deleteUser(@PathVariable(value = "id") String id) {
    Optional<UserModel> obj = userService.findById(id);
    if(!obj.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    userService.delete(obj.get());
    return ResponseEntity.status(HttpStatus.OK).body("Deleted");
  }
}
