import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BiTrash } from 'react-icons/bi';
import { Input } from '../Input';
import { styles as S } from './styles';
import { Button } from '../Button';

export interface FormProps {
  onSubmitForm: Function;
  schema: {
    title: string;
    textButton: string;
    layout: string;
    fields: FieldProps[];
    validation: yup.ObjectSchema<any>;
  };
}
export interface FieldProps {
  type: string;
  name: string;
  label: string;
  fileType?: string;
  multiple?: boolean;
  placeholder?: string;
  options?: OptionProps[] | [];
}
export interface OptionProps {
  value: string | number;
  name: string;
}
export const Form = ({ schema, onSubmitForm }: FormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema.validation) });
  const [filesUrls, setFilesUrls] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [fileNameProperty, setFileNameProperty] = useState<string>('files');
  const onSubmit = (data: any) => {
    if (files.length) {
      data[fileNameProperty] = files;
    }
    onSubmitForm(data);
  };

  const filesWatch = watch(fileNameProperty);
  useEffect(() => {
    if (filesWatch?.length) {
      const filesBlobUrl = Object.keys(filesWatch)?.map((photo: string) =>
        window.URL.createObjectURL(filesWatch[photo])
      );
      setFiles(Array.from(filesWatch));
      setFilesUrls(filesBlobUrl);
    }
  }, [filesWatch]);
  const handleTrash = (key: number) => {
    setFilesUrls(filesUrls.filter((file) => filesUrls.indexOf(file) !== key));
    setFiles(files.filter((file) => files.indexOf(file) !== key));
  };
  return (
    <>
      <h2 className="mb-4">{schema?.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={schema?.layout}>
          {schema.fields.map((prop: FieldProps, key: number) => {
            switch (prop.type) {
              case 'text':
                return (
                  <S.FieldContainer key={key}>
                    <Input
                      errors={errors[prop['name']]}
                      label={prop?.label}
                      placeholder={prop.placeholder}
                      name={prop.name}
                      register={register}
                    />
                  </S.FieldContainer>
                );
              case 'search':
                return (
                  <S.FieldContainer key={key}>
                    <Input
                      errors={errors[prop['name']]}
                      type="search"
                      label={prop?.label}
                      placeholder={prop.placeholder}
                      name={prop.name}
                      register={register}
                    />
                  </S.FieldContainer>
                );
              case 'select':
                // @ts-ignore
                return (
                  <S.FieldContainer key={key}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">{prop?.label}</span>
                        <span className="label-text-alt">Alt label</span>
                      </label>
                      <select
                        className="select select-bordered"
                        {...register(prop?.name)}
                      >
                        <option disabled selected>
                          {prop?.placeholder}
                        </option>
                        {
                          // @ts-ignore
                          prop?.options?.map((opt: OptionProps): any => (
                            <option value={opt?.value} key={opt.value}>
                              {opt?.name}
                            </option>
                          ))
                        }
                      </select>
                      <span className="text-xs text-error">
                        <>{errors[prop['name']]?.message}</>
                      </span>
                    </div>
                  </S.FieldContainer>
                );
              case 'checkbox':
                return (
                  <S.FieldContainer key={key}>
                    <>
                      <span>{prop?.label}</span>
                      <input
                        className="checkbox checkbox-primary"
                        type="checkbox"
                        {...register(prop.name)}
                      />
                    </>
                    <span className="text-xs font-poppins text-red-500">
                      <>{errors[prop['name']]?.message}</>
                    </span>
                  </S.FieldContainer>
                );
              // @ts-ignore
              case 'file':
                if (fileNameProperty !== prop.name) {
                  setFileNameProperty(prop.name);
                }
                return (
                  <S.FieldContainer key={key}>
                    <div className="flex w-full items-center justify-center bg-grey-lighter">
                      <label className="w-64 flex flex-col items-center px-4 py-6 bg-base text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">
                          {prop?.label}
                        </span>
                        <input
                          type="file"
                          multiple={prop?.multiple || true}
                          className="hidden"
                          {...register(prop.name)}
                        />
                      </label>
                    </div>
                    <span className="text-xs text-red-500">
                      <>{errors[prop['name']]?.message}</>
                    </span>
                    <div className="grid grid-flow-row md:grid-cols-4 gap-4">
                      {filesUrls &&
                        filesUrls.map((file, key) => {
                          return (
                            <div
                              className="flex flex-col justify-center items-center"
                              key={key}
                            >
                              {prop.fileType === 'image' && (
                                <img
                                  className="mt-2 h-16"
                                  src={file}
                                  alt={'image'}
                                />
                              )}
                              {prop.fileType !== 'image' && (
                                <div className="mt-2 break-all">
                                  <span>
                                    {files[key]?.name.substr(0, 50) + '...'}
                                  </span>
                                </div>
                              )}
                              <button
                                type="button"
                                className="mt-2 bg-th-background flex justify-center w-full rounded"
                                onClick={() => handleTrash(key)}
                              >
                                <BiTrash
                                  className="text-th-primary-dark"
                                  size={24}
                                />
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  </S.FieldContainer>
                );
              default:
                return (
                  <S.FieldContainer key={key}>
                    <Input
                      errors={errors[prop['name']]}
                      type={prop.type}
                      label={prop?.label}
                      name={prop.name}
                      register={register}
                    />
                  </S.FieldContainer>
                );
            }
          })}
        </div>
        <div className="flex   justify-end p-4">
          <Button size="sm" btntype="base" type="submit">
            {schema?.textButton || 'Confirm'}
          </Button>
        </div>
      </form>
    </>
  );
};
