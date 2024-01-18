import React, { FC, PropsWithChildren, ReactNode, useState } from 'react'
import { Layout,  Menu, Skeleton } from 'antd';
import { StyledButtonLink, StyledButtonText, StyledDivider, StyledLayout, StyledLayoutContent, StyledLogoHeader, StyledSidebar, StyledSider, StyledTrigger } from '../UI/UI.styled';
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  LeftOutlined,
  EditOutlined, 
  FileAddOutlined,
  DeleteOutlined, 
  HomeOutlined 
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { MenuProps } from 'antd/lib';


type Props = {
  pageKey?: string;
  backUrl?: string | number;
  title: string;
  action?: ReactNode;
  isLargeTitle?: boolean;
};

type MenuItem = Required<MenuProps>['items'][number];

const Page: FC<PropsWithChildren<Props>> = ({
  pageKey,
  title,
  backUrl,
  children,
  isLargeTitle = true,
}) => {
    const [siderCollapse, setSiderCollapse] = useState<boolean>(true);
    const navigate = useNavigate();

  const getMenuItem = (
    label: ReactNode,
    key: string,
    icon?: ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label: <Link to={key}>{label}</Link>,
    } as MenuItem;
  };

  const items: MenuItem[] = [
    getMenuItem('Главная', '/', <HomeOutlined />),
    getMenuItem('Добавить событие', '/add', <FileAddOutlined /> ),
    getMenuItem('Редакитровать события', '/edit', <EditOutlined />),
    getMenuItem('Удалить событие', '/delete', <DeleteOutlined />),
  ];



  return (
 <StyledLayout>
      <StyledSider
        collapsible={true}
        width={240}
        trigger={null}
        collapsed={siderCollapse}
      >
        <StyledLogoHeader
          collapse={Number(siderCollapse)}
        />
        <StyledDivider collapse={Number(siderCollapse)} />
        <StyledSidebar
          mode="inline"
          defaultSelectedKeys={[pageKey || '/']}
          items={items}
        />
        <StyledTrigger
          shape="circle"
          onClick={() =>
            setSiderCollapse((prevState) =>!prevState)
          }
        >
          {siderCollapse ? <CaretRightOutlined /> : <CaretLeftOutlined />}
        </StyledTrigger>
      </StyledSider>
      <Layout>
        <Menu />
        <StyledLayoutContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f5f5f5',
            }}
          >
            <Skeleton
              style={{ marginBlock: 20, width: '40%', height: 32 }}
              loading={title === 'load'}
              active={true}
              title={true}
              paragraph={false}
            >
              <StyledButtonLink
                style={{ cursor: backUrl ? 'pointer' : 'default' }}
                onClick={() =>
                  typeof backUrl === 'string'
                    ? navigate(backUrl)
                    : !!backUrl && navigate(-1)
                }
              >
                <StyledButtonText
                  style={{
                    fontSize: isLargeTitle ? '24px' : '16px',
                    lineHeight: isLargeTitle ? '32px' : '24px',
                    fontWeight: isLargeTitle ? 600 : 500,
                    marginBottom: 24,
                  }}
                  level={2}
                >
                  {backUrl && (
                    <LeftOutlined
                      style={{ width: 13, height: 13, marginRight: 13 }}
                    />
                  )}
                  {title}
                </StyledButtonText>
              </StyledButtonLink>
            </Skeleton>
          </div>
          <div
            style={{
              marginTop: 0,
              width: '100%',
            }}
          >
            {children}
          </div>
        </StyledLayoutContent>
      </Layout>
    </StyledLayout>
  )
}

export default Page;
