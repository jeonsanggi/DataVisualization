package com.jremind.dao;

import java.util.List;

import com.jremind.vo.MovieVO;

public interface MovieDAO {
	public List<MovieVO> selectMovie() throws Exception;
}
