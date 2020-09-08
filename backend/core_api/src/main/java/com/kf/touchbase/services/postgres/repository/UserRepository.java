package com.kf.touchbase.services.postgres.repository;

import com.kf.touchbase.models.domain.postgres.User;
import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;

import javax.inject.Singleton;
import java.util.Optional;
import java.util.UUID;

@Singleton
@Repository
public interface UserRepository extends CrudRepository<User, UUID> {

    Iterable<User> findByUsernameContainsOrFirstNameContainsOrLastNameContains(String queryUsername, String queryFirstName, String queryFullName);

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    Optional<User> findByAuthKey(String AuthKey);

    Optional<User> findAllById(Iterable<UUID> uuids);
}