import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){
  return(
    <div id="page-teacher-list" className='container'>
      <PageHeader title="Estes saos os proffys disponiveis">
        <form id="search-teachers">
          <Select 
            name="subject" 
            label="Materia"
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Matematica', label: 'Matematica'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Ciencias', label: 'Ciencias'},
              {value: 'Portugues', label: 'Portugues'},
              {value: 'Fisica', label: 'Fisica'},
              {value: 'Educacao Fisica', label: 'Educacao Fisica'},
              {value: 'Historia', label: 'Historia'},
            ]}
          ></Select>
          <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terca-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'},
              {value: '6 Fisica', label: 'Sabado'},
            ]}
          ></Select>
          <Input type="time" name="time" label="Hora"></Input>
        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  )
}

export default TeacherList;