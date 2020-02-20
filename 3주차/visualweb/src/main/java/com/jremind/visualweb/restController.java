package com.jremind.visualweb;

import java.util.List;

import javax.inject.Inject;

import org.mariadb.jdbc.internal.logging.Logger;
import org.mariadb.jdbc.internal.logging.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jremind.service.MovieService;
import com.jremind.vo.MovieVO;

@RestController
public class restController {
	private static final Logger logger = LoggerFactory.getLogger(restController.class);
	
	@Inject
	private MovieService service;
	
	@RequestMapping(value="/restex")
	public List<MovieVO> movieList() throws Exception{
		logger.info("home");
		
		List<MovieVO> movieList = service.selectMovie();
		return movieList;
	}

}
