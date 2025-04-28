import React, { useState } from "react";
import { Card, Code, CompanyName, Time } from "./CompanyCard.styled";
import { BiSolidBusiness } from "react-icons/bi";
import { Modal } from "../Modal/Modal";
import { formatDate, timeDifference } from "../../services";
import CompanyForm from "../CompanyForm/CompanyForm";
import { Button } from "../Button/Button";
import { MdDelete } from "react-icons/md";

const CompanyCard = ({
  company,
  company: {
    _id,
    companyName,
    edrpo,
    licenseStartTime,
    licenseEndTime,
    licenseCount,
  },
  handleDelete,
  edit,
}) => {
  const formatedStartDate = formatDate(licenseStartTime);
  const formatedEndDate = formatDate(licenseEndTime);
  const remainingTime = timeDifference(licenseStartTime, licenseEndTime);
  const [editFormOpen, setEditFormOpen] = useState(false);

  function openEditForm() {
    setEditFormOpen(true);
  }
  function closeEditForm() {
    setEditFormOpen(false);
  }

  return (
    <>
      <Card onClick={() => openEditForm(_id)}>
        <CompanyName>
          <BiSolidBusiness />
          <p>{companyName}</p>
        </CompanyName>
        <div>
          <Code>ЄДПРОУ {edrpo}</Code>
          <Time>
            <p>Кількість ліцензій:</p> <p>{licenseCount}</p>
          </Time>
          <Time>
            <p>Дата початку ліцензії:</p> <p>{formatedStartDate}</p>
          </Time>
          <Time>
            <p>Дата закінчення ліцензії:</p> <p>{formatedEndDate}</p>
          </Time>
          <Time>
            <p>Час до закінчення ліцензії:</p> <p>{remainingTime}</p>
          </Time>
        </div>
      </Card>
      {editFormOpen && (
        <Modal onClose={closeEditForm}>
          <CompanyForm
            variant={"edit"}
            company={company}
            edit={edit}
            onClose={closeEditForm}
          />
          <Button
            icon={MdDelete}
            visibility="visible"
            variant="neutral"
            role="warning"
            tooltip="Видалити компанію"
            onClick={() => handleDelete(_id)}
          >
            Видалити компанію
          </Button>
        </Modal>
      )}
    </>
  );
};

export default CompanyCard;
