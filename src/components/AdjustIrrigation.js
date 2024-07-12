import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const AdjustIrrigation = () => {
  const [schedule, setSchedule] = useState({
    startTime: '',
    duration: '',
  });
  const [deviceData, setDeviceData] = useState({
    soilMoisture: 0,
    weather: 'Sunny',
  });

  useEffect(() => {
    fetchSchedule();
    fetchDeviceData();
  }, []);

  const fetchSchedule = async () => {
    // Fetch current schedule from the server (replace with actual API call)
    const response = await fetch('/api/schedule');
    const data = await response.json();
    setSchedule(data);
  };

  const fetchDeviceData = async () => {
    // Fetch IoT data from the server (replace with actual API call)
    const response = await fetch('/api/deviceData');
    const data = await response.json();
    setDeviceData(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule({
      ...schedule,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the updated schedule to the server (replace with actual API call)
    await fetch('/api/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(schedule),
    });
    alert('Schedule updated successfully!');
  };

  return (
    <Card className="mb-4">
      <Card.Header>Adjust Irrigation Schedule</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Soil Moisture:</strong> {deviceData.soilMoisture}%
        </Card.Text>
        <Card.Text>
          <strong>Weather:</strong> {deviceData.weather}
        </Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Start Time
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="time"
                name="startTime"
                value={schedule.startTime}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Duration (minutes)
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="number"
                name="duration"
                value={schedule.duration}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Schedule
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AdjustIrrigation;
