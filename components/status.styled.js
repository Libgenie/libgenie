import styled from 'styled-components/native';
   export const BookStatus = styled.Text`
    fontFamily: 'Barlow_600SemiBold';
    fontSize: 16px;
    color: ${props => props.status === 1 ? '#32a842' : props.status === 2 ? '#078de0' : props.status === 3 ? '#ecbe05' : '#c90411' };
    width: 30%;
    textAlign: right;
    `;

    export const ListIcon = styled.View`
    backgroundColor: ${props => props.status === 1 ? '#ADDCB3' : props.status === 2 ? '#9CD1F3' : props.status === 3 ? '#F7E59B' : '#E99BA0'};
    borderRadius: 50px;
    justifyContent: center;
    alignItems: center;
    width: 45px;
    height: 45px;
    padding: 10px;
    `;