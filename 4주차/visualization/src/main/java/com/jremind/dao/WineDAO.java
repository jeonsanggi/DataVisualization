package com.jremind.dao;

import java.util.List;

import com.jremind.vo.WineVO;



public interface WineDAO {
	public List<WineVO> selectWine() throws Exception;
}
