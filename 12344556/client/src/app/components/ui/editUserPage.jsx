import React, { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radioField";
import BackHistoryButton from "../common/backButton";
import { useAuth } from "../../hooks/useAuth";

const EditUserPage = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { currentUser, updateUserData } = useAuth();
  const [errors, setErrors] = useState({});

  const handleSubmit =async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    await updateUserData({...data})
    history.push(`/users/${currentUser._id}`)
  };

  useEffect(() => {
    if (currentUser && !data) {
      console.log(currentUser);
      setData({
        ...currentUser
      });
    }
  }, [currentUser, data]);

  useEffect(() => {
    if (data && isLoading) {
      setIsLoading(false);
    }
  }, [data]);

  const validatorConfig = {
    phoneNumber: {
      isRequired: {
        message: "Номер телефона обязательно для заполнения"
      },
      min: {
        message: "Номер телефона должен состоять минимум из 11 символов",
        value: 11
      }
    },
    name: {
      isRequired: {
        message: "Введите ваше имя"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения"
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать как минимум одну заглавную букву"
      },
      isContainDigit: {
        message: "Пароль должен содержать как минимум одно число"
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8
      }
    }
  };
  useEffect(() => validate(), [data]);
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  return (
    <div className="container mt-5">
      <BackHistoryButton />
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {!isLoading ? (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label="Пароль"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
              />
              <TextField
                label="Номер телефона"
                type="number"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleChange}
                error={errors.phoneNumber}
              />
              <RadioField
                options={[
                  { name: "Male", value: "male" },
                  { name: "Female", value: "female" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
              />

              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
              >
                Обновить
              </button>
            </form>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};

export default EditUserPage;
