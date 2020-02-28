package com.jremind.service;

import java.util.List;

import com.jremind.vo.WineVO;

public interface WineService {
	public List<WineVO> selectWine() throws Exception;
}
