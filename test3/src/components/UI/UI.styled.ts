import { Button, Dropdown, Layout, Menu, Typography } from 'antd';
import styled from 'styled-components';

export const WrapperContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .ant-picker {
    width: 100%
  }
`;


interface IStyledContainerRow {
  justifyContent?: string;
  alignItems?: string;
  wrap?: string;
  show?: boolean;
}

export const StyledContainerRow = styled.div<IStyledContainerRow>`
  display: ${({ show = true }) => (show ? 'flex' : 'none')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  justify-content: ${({ justifyContent }) =>
  justifyContent ? justifyContent : 'flex-start'};
  gap: 24px;
  margin-top: 12px;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'no-wrap')};
  width: 100%;
  transition: all 1s;
`;


export const ScheduleWrapper = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  max-height: 800px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8e9fbf;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }
`;

export const InnerShedulerWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 0 1 75%;
  padding: 0 5px;
  height: 720px;
`;
export const StyledTag = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  color: #ffffff;
`;

export const StyledSwitchBox = styled.div`
  border: 1px solid #8e9fbf;
  border-radius: 8px;
  padding: 4px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const StyledSwitchButton = styled.button`
  border: none;
  background: none;
  padding: 8px 12px;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
`;

export const StyledSwitchText = styled.span`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #2f3f5e;
`;


export const EventListTitle = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  align-self: flex-start;
  margin: 0px;
`;

export const EventListExternal = styled.div`
  flex: 0 0 22%;
  height: 720px;
  overflow-y: hidden;
  margin: 0 5px;
`
export const EventListScrollable = styled.div`
  padding: 5px;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: scroll;
`

export const StyledLayout = styled(Layout)`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: row;

  .ant-layout-sider .ant-menu-item {
    padding: 0 18px !important;
  }

  .ant-layout-sider.ant-layout-sider-collapsed .ant-menu-item {
    position: relative !important;
  }

  .ant-layout-sider.ant-layout-sider-collapsed
    .ant-menu-item
    .ant-menu-item-icon {
    position: absolute !important;
    top: 10px !important;
    left: 15px !important;
  }
`;

export const StyledSidebar = styled(Menu)`
  min-height: calc(100% - 205px);
  padding: 8px 16px 16px 16px;
`;

export const StyledLogoHeader = styled.div<{ collapse: number }>`
  height: 118px;
  display: flex;
  padding: ${({ collapse }) => (collapse ? 15 : 28)}px 28px 28px 28px;
  justify-content: center;
`;

export const StyledDivider = styled.div<{ collapse: number }>`
  background: ${({ collapse }) => (collapse ? 'transparent' : '#62769d')};
  font-size: 0;
  border: 0;
  height: 1px;
  margin: 0 20px;
`;

export const StyledTrigger = styled(Button)`
  width: 46px;
  height: 46px;
  background: #2f3f5e;
  color: #fff;
  border: 0;
  margin: 16px;
`;

export const StyledMenu = styled(Layout.Header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-inline: 24px !important;
  height: 60px !important;
  line-height: 60px !important;
`;

export const StyledLayoutContent = styled(Layout.Content)`
  overflow-y: auto;
  padding: 0 24px 24px 24px;
`;

export const StyledDropdown = styled(Dropdown)`
  :hover {
    color: #b6c0d7 !important;
  }
`;

export const StyledSider = styled(Layout.Sider)`
  background: #1F53A6 !important;
`;

export const IconRoundedWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #b6c0d7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const StyledButtonLink = styled.button`
  border: none;
  background: none;
  padding: 0;
  max-width: 70%;
`;

export const StyledButtonText = styled(Typography.Title)`
  margin-top: 24px;
  margin-bottom: 14px;
  color: #151f34;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  text-align: left;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
`;
