package com.kf.touchbase.models.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import io.micronaut.security.authentication.UserDetails;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.neo4j.ogm.annotation.NodeEntity;

import java.util.Collection;

@Data
@ToString
@EqualsAndHashCode(callSuper = true)
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "uuid")
@NodeEntity
public class JwtUserDetails extends UserDetails {
    private String email;
    public JwtUserDetails(String username, Collection<String> roles) {
        super(username, roles);
    }

    public JwtUserDetails(String username, Collection<String> roles, String email) {
        super(username, roles);
        this.email = email;
    }
}
