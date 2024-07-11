const { z } = require("zod");

const reservationSchema = z.object({
  status: z.string({
    invalid_type_error: "Votre statut n'est pas valide",
  }),
  price: z.number({
    invalid_type_error: "Votre prix doit être indiqué par un chiffre",
  }),
  startTime: z.string().time({
    invalid_type_error: "Vous devez indiquer une date au bon format",
  }),
  endTime: z.string().time({
    invalid_type_error: "Vous devez indiquer une date au bon format",
  }),
  userId: z.number({
    invalid_type_error:
      "vous devez utiliser un nombre ou l'utilisateur n'existe pas",
  }),
});

const validateReservationSchema = (req, res, next) => {
  const { status, price, startTime, endTime, userId } = req.body;

  const validate = reservationSchema.safeParse({
    status,
    price,
    startTime,
    endTime,
    userId,
  });

  if (!validate.success) {
    const errors = validate.error.issues.reduce((acc, issue) => {
      acc[issue.path[0]] = issue.message;
      return acc;
    }, {});
    return res.status(404).json(errors);
  }
  return next();
};

module.exports = validateReservationSchema;
