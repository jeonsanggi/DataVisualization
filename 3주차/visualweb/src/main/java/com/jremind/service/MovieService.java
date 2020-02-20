package com.jremind.service;

import java.util.List;

import com.jremind.vo.MovieVO;

public interface MovieService {
	public List<MovieVO> selectMovie() throws Exception;
}
