// @ts-ignore
import React, {
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
} from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { CardItem } from './components/CardItem';
import { Progress } from './components/Progress';
import { Input } from './components/Input';
import { Form } from './components/Form';
import { Grid } from './components/Grid';
import { Skelleton } from './components/Skelleton';
import { Table } from './components/Table';
// import { Layout } from './templates/Layout';
// import { Landing } from './templates/Landing';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?:
    | string
    | number
    | ReactElement<any, string | JSXElementConstructor<any>>;
}
export {
  Button,
  Card,
  CardItem,
  Progress,
  Input,
  Form,
  Grid,
  Skelleton,
  Table,
  // Layout,
  // Landing,
};
