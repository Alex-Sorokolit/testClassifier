import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { validationColor } from "../../services/utility";
import { Button } from "../Button/Button";
import { PulseLoader } from "react-spinners";
import InputDatePicker from "../DatePicker/InputDatePicker";
import { FaGear } from "react-icons/fa6";
// import { toast } from "react-toastify";
import {
  StyledForm,
  FormTitle,
  InputWrapper,
  MessageVrapper,
  Input,
  TextArea,
  ErrorMessageStyled,
  ButtonWrapper,
} from "../CommonFormStyles/CommonFormStyles.styled";
import { DateWrapper, Hint } from "./CompanyForm.style";
import { checkEmail } from "../../services";

const CompanyForm = ({ onClose, create, edit, variant, company }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const { setFieldError } = useFormikContext();

  // Початкові значення
  let initialValues = {
    companyName: "",
    edrpo: "",
    licenseCount: "",
    licenseStartTime: null,
    licenseEndTime: null,
    headEmail: "",
  };
  if (variant === "edit") {
    initialValues = {
      companyName: company.companyName,
      edrpo: company.edrpo,
      licenseCount: company.licenseCount,
      licenseStartTime: company.licenseStartTime,
      licenseEndTime: company.licenseEndTime,
      headEmail: company.headEmail,
    };
  }
  // Схема валідації
  const addCompanySchema = yup.object().shape({
    companyName: yup
      .string()
      .min(3, "Повинно бути мінімум 3 символи")
      .max(500, "Допустимо не більше 500 символів")
      .required("Назва компанії обов'язкове поле"),
    edrpo: yup
      .string()
      .matches(/^\d{8}$/, "Код повинен складатися з 8 цифр наприклад: 12345678")
      .required("Код компанії обов'язкове поле"),
    licenseCount: yup
      .number()
      .typeError("Введіть число")
      .positive("Введіть число більше 0"),
    licenseStartTime: yup
      .date()
      .typeError("Оберіть дату")
      .required("Дата початку є обов’язковою"),

    licenseEndTime: yup
      .date()
      .typeError("Оберіть дату")
      .required("Дата завершення є обов’язковою"),
    headEmail: yup
      .string()
      .email("Некоректний email")
      .required("Email обов'язковий")
      .test(
        "check-email-exists",
        "Цей email не зареєстрований",
        async (value) => {
          if (!value) return true;
          const res = await checkEmail(value);
          if (res.data.exist) {
            return true;
          }
          return false; // true означає валідний
        }
      ),
  });

  const handleSubmit = async (values, actions) => {
    // console.log("values: ", values);
    // console.log("actions: ", actions);
    const { resetForm } = actions;
    try {
      setIsLoading(true);
      if (variant === "edit") {
        await edit(company._id, values);
      } else await create({ ...values });
      resetForm();
      onClose();
    } catch (error) {
      console.log("Не вдалось створити компанію");
    } finally {
      setIsLoading(false);
    }
  };
  // const checkEmail = async (e) => {
  //   const email = e.target.value;
  //   console.log("email: ", email);
  //   try {
  //     const user = await checkEmail(email);
  //     if (user) {
  //       return true;
  //     }
  //   } catch (error) {
  //     // console.log("error: ", error);
  //     toast.error(`Email ${email} не зареєстнований`);
  //     return false;
  //   }
  // };

  return (
    <div>
      {variant === "edit" ? (
        <FormTitle>Редагування компанії</FormTitle>
      ) : (
        <FormTitle>Створення нової компанії</FormTitle>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={addCompanySchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {(props) => (
          <StyledForm>
            <InputWrapper>
              <MessageVrapper>
                <label htmlFor="companyName">Назва компанії</label>
                <ErrorMessage
                  name="companyName"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </MessageVrapper>

              <TextArea
                name="companyName"
                id="companyName"
                placeholder="Введіть назву компанії"
                type="text"
                bordercolor={validationColor(
                  props.errors.companyName,
                  props.values.companyName
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <MessageVrapper>
                <label htmlFor="edrpo">Код ЄДРПОУ</label>
                <ErrorMessage
                  name="edrpo"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </MessageVrapper>

              <Input
                name="edrpo"
                id="edrpo"
                placeholder="Введіть код ЄДРПОУ"
                type="text"
                bordercolor={validationColor(
                  props.errors.edrpo,
                  props.values.edrpo
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <MessageVrapper>
                <label htmlFor="headEmail">Email керівника компанії</label>
                <ErrorMessage
                  name="headEmail"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                ></ErrorMessage>
              </MessageVrapper>
              <Input
                name="headEmail"
                id="headEmail"
                placeholder="Введіть код email керівника компанії"
                type="text"
                bordercolor={validationColor(
                  props.errors.headEmail,
                  props.values.headEmail
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <MessageVrapper>
                <label htmlFor="licenseCount">Кількість ліцензій</label>
                <ErrorMessage
                  name="licenseCount"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </MessageVrapper>

              <Input
                name="licenseCount"
                id="licenseCount"
                placeholder="Введіть кількість ліцензій для компанії"
                type="text"
                bordercolor={validationColor(
                  props.errors.licenseCount,
                  props.values.licenseCount
                )}
              />
            </InputWrapper>
            <DateWrapper>
              <InputWrapper>
                <MessageVrapper>
                  <label htmlFor="licenseStartTime">
                    Дата початку дії ліцензій
                  </label>
                </MessageVrapper>
                <InputDatePicker
                  name="licenseStartTime"
                  id="licenseStartTime"
                />
              </InputWrapper>
              <InputWrapper>
                <MessageVrapper>
                  <label htmlFor="licenseEndTime">
                    Дата завершення дії ліцензій
                  </label>
                </MessageVrapper>
                <InputDatePicker
                  name="licenseEndTime"
                  minDate={new Date()}
                  id="licenseEndTime"
                />
              </InputWrapper>
              <InputWrapper>
                <strong>Підказка:</strong>
                <Hint style={{ margin: 0, paddingLeft: "18px" }}>
                  <li>← → — переміщення по днях </li>
                  <li>↑ ↓ — переміщення по тижнях</li>
                  <li>PageUp / PageDown — по місяцях</li>
                  <li>Shift+PageUp / Shift+PageDown — по роках</li>
                  <li>Enter — вибрати дату</li>
                </Hint>
              </InputWrapper>
            </DateWrapper>
            <ButtonWrapper>
              {variant === "edit" ? (
                <Button
                  type="submit"
                  disabled={Object.keys(props.errors).length > 0}
                  isLoading={true}
                  icon={FaGear}
                >
                  Оновити
                  {isLoading && <PulseLoader color="#ffffff" size={5} />}
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={Object.keys(props.errors).length > 0}
                  isLoading={true}
                >
                  Створити
                  {isLoading && <PulseLoader color="#ffffff" size={5} />}
                </Button>
              )}
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default CompanyForm;
