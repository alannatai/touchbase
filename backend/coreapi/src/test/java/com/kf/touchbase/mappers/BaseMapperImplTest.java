package com.kf.touchbase.mappers;

import com.kf.touchbase.domain.Base;
import com.kf.touchbase.dto.BaseReq;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class BaseMapperImplTest {

    private BaseMapperImpl baseMapperImplUnderTest;

    @BeforeEach
    void setUp() {
        baseMapperImplUnderTest = new BaseMapperImpl();
    }

    @Test
    void testBaseReqToBase() {
        // Setup
        final BaseReq base = new BaseReq("uuid", "name", 0.0, "imageUrl");
        final Base expectedResult = Base.builder().uuid("uuid").name("name").score(0.0).imageUrl("imageUrl").build();

        // Run the test
        final Base result = baseMapperImplUnderTest.baseReqToBase(base);

        // Verify the results
        assertThat(result).isEqualToComparingFieldByField(expectedResult);
    }
}
