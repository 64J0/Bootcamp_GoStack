import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

const appointmentsRouter = Router();

// SOC: Separation of Concerns (Separação de preocupações)

// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.status(200).json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    // provider => barbeiro
    // date => data que será o atendimento
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.status(200).json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
