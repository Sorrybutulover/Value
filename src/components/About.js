import React, { useState } from 'react';
import { Container, Button, Form, Modal, Spinner } from 'react-bootstrap';
import '../css/about.css';

function About() {
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleShowModal = () => {
    if (feedback.trim()) {
      setShowModal(true);
      setQuestion(feedback.trim());
    } else {
      alert('Пожалуйста, введите вопрос.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    if (email.trim() && question.trim()) {
      if (!isValidEmail(email)) {
        alert('Пожалуйста, введите корректный email.');
        return;
      }
      setLoading(true);
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx0_AftHo3dvEOpR0H_XXZycAg9hTDdBtmseyEqpcMA_dTxnoknS2qI1YdXc0VvEM8/exec', {
          method: 'POST',
          mode: 'no-cors', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, question }),
        });
  
        if (response.ok) {
          setShowModal(false);
          setFeedback('');
          setEmail('');
          setQuestion('');
          alert('Спасибо за ваш вопрос!');
        } else {
          alert(`Спасибо за ваш вопрос!`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Произошла ошибка. Попробуйте снова.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  const isValidEmail = (email) => {
    // Простая проверка на наличие @ и .
    return /\S+@\S+\.\S+/.test(email);
  };
  

  return (
    <Container className='main-cont'>
      <div className='message-cont-left'>
        <p className='message-left'>Что такое <strong>Summarai?</strong></p>
      </div>
      <div className='message-cont-right'>
        <p className='message-right'><strong>Summarai</strong> - это инструмент, который преобразует ваши онлайн-встречи в конкретные действия. Мы используем передовые технологии искусственного интеллекта для транскрибирования разговоров и выявления ключевых моментов. Отныне каждая встреча становится возможностью для решений и движения вперёд.</p>
      </div>
      <div className='message-cont-left'>
        <p className='message-left'>Какие преимущества у <strong>Summarai</strong>?</p>
      </div>
      <div className='message-cont-right'>
        <p className='message-right'>Забудьте о том, чтобы тратить часы на длительные встречи без результатов. <strong>Summarai</strong> быстро извлекает из них суть, помогая вам сфокусироваться на важном и принять решения быстрее. <br/>
                                    Наш инструмент организует ключевые моменты встречи на канбан-доске, делая их доступными для анализа и дальнейших действий. Теперь вы можете видеть целую картину и принимать информированные решения. <br/>
                                    <strong>Summarai</strong> создан для комфортного использования. Просто загрузите запись вашей встречи, и наш инструмент позаботится об остальном.</p>
      </div>
      <div className='message-cont-left'>
        <p className='message-left'>Я уже хочу попробовать</p>
      </div>
      <div className='message-cont-right'>
        <p className='message-right'>Отныне ваши онлайн-встречи будут не просто словами, а ценными источниками для вашего прогресса. Попробуйте <strong>Summarai</strong> прямо сейчас и убедитесь сами!</p>
      </div>

      <div className='feedback-section'>
        <Form.Control
          as='textarea'  // Используем textarea для многострочного ввода
          rows={2}       // Указываем высоту в пяти строк
          placeholder='Задайте свой вопрос'
          value={feedback}
          onChange={handleFeedbackChange}
          className='feedback-input rounded-3'  // Добавляем класс для скругления углов
        />
        <Button onClick={handleShowModal} disabled={!feedback.trim()}  className='feedback-button btn-lg'>
          Отправить
        </Button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Отправить вопрос</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Ваш email</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Введите ваш email'
              className='modal-input'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ваш вопрос</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder='Введите ваш вопрос'
              className='modal-input'
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Закрыть
          </Button>
          <Button variant='primary' onClick={handleSubmit} disabled={loading}>
            {loading ? <Spinner animation='border' size='sm' /> : 'Отправить'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default About;