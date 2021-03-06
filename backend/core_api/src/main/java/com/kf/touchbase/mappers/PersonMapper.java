package com.kf.touchbase.mappers;

import com.kf.touchbase.models.domain.Person;
import com.kf.touchbase.models.dto.PersonReq;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PersonMapper {

    Person personReqToPerson(PersonReq person);
}
