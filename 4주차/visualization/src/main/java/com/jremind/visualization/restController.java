package com.jremind.visualization;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jremind.service.WineService;
import com.jremind.vo.WineVO;

@RestController
public class restController {
	private static final Logger logger = LoggerFactory.getLogger(restController.class);
	
	@Inject
	private WineService service;
	
	@RequestMapping(value="/visualization/data")
	public List<WineVO> WindeList() throws Exception{
		logger.info("home");
		
		List<WineVO> wineList = service.selectWine();
		return wineList;
	}

}
