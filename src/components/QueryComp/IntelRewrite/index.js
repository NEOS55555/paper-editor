import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Spin } from 'antd';
import { eventBus } from '@/common'
import './index.scss'

class Index extends Component {
	render () {
		const { intelList, isSearching } = this.props;
		return (
			<div className="query-list-wrapper">
				<Spin spinning={isSearching}></Spin>
				<ul className="query-list">
					{
						intelList.map(it => (
							<li key={it.id}>
								<div className="text-ctn">
									<p className="text">{it.content}</p>
									{it.img && <img src={it.img} alt=""/>}
								</div>
								<div className="oper">
									<Button type="link" onClick={() => eventBus.emit('replaceDataToEditor', it.content)} >替换原文</Button>
								</div>
							</li>
						))
					}
					
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
  const { intelList, isSearching } = state.search
  // console.log('s')
  return {
    intelList, isSearching
  };
};


export default connect(mapStateToProps)(Index);