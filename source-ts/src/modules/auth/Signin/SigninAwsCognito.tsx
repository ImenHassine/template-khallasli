import React from 'react';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import {Checkbox} from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth/lib/types';
import * as yup from 'yup';
import IconButton from '@material-ui/core/IconButton';
import {Auth} from 'aws-amplify';
import {useDispatch} from 'react-redux';
import InfoView from '../../../@crema/core/InfoView';
import {onSignInCognitoUser} from '../../../redux/actions';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Link, useHistory} from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import {CremaTheme} from '../../../types/AppContextPropsType';
import {Fonts} from 'shared/constants/AppEnums';

const useStyles = makeStyles((theme: CremaTheme) => ({
  formRoot: {
    textAlign: 'left',
    [theme.breakpoints.up('xl')]: {
      marginBottom: 24,
    },
  },
  myTextFieldRoot: {
    width: '100%',
  },
  checkboxRoot: {
    marginLeft: -12,
  },
  pointer: {
    cursor: 'pointer',
  },
  btnRoot: {
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    width: '10rem',
    fontWeight: Fonts.REGULAR,
    fontSize: 16,
  },
  dividerRoot: {
    marginBottom: 16,
    marginLeft: -48,
    marginRight: -48,
    [theme.breakpoints.up('xl')]: {
      marginBottom: 32,
    },
  },
  iconButtonRoot: {
    marginLeft: 4,
    marginRight: 4,
    color: theme.palette.grey[500],
    '&:hover, &:focus': {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: 8,
      marginRight: 8,
    },
  },
  textLg: {
    fontSize: 18,
  },
  textPrimary: {
    color: theme.palette.text.primary,
  },
  colorTextPrimary: {
    color: theme.palette.primary.main,
  },
  underlineNone: {
    textDecoration: 'none',
  },
  textGrey: {
    color: theme.palette.grey[500],
  },
}));
const MyTextField = (props: any) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid Email')
    .required('Email required'),
  password: yup.string().required('Password required'),
});

interface UserSigninProps {}

const SigninAwsCognito: React.FC<UserSigninProps> = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onGoToForgetPassword = () => {
    history.push('/forget-password');
  };

  const {messages} = useIntl();

  const classes = useStyles(props);

  return (
    <Box flex={1} display='flex' flexDirection='column'>
      <Box
        px={{xs: 6, sm: 10, xl: 15}}
        pt={8}
        flex={1}
        display='flex'
        flexDirection='column'>
        <Formik
          validateOnChange={true}
          initialValues={{
            email: 'crema.demo@gmail.com',
            password: 'Pass@1!@all',
          }}
          validationSchema={validationSchema}
          onSubmit={(data, {setSubmitting}) => {
            setSubmitting(true);
            dispatch(
              onSignInCognitoUser(
                {email: data.email, password: data.password},
                history,
              ),
            );
            setSubmitting(false);
          }}>
          {({isSubmitting}) => (
            <Form className={classes.formRoot} noValidate autoComplete='off'>
              <Box mb={{xs: 5, xl: 8}}>
                <MyTextField
                  placeholder={messages['common.email']}
                  label={<IntlMessages id='common.email' />}
                  name='email'
                  variant='outlined'
                  className={classes.myTextFieldRoot}
                />
              </Box>

              <Box mb={{xs: 3, lg: 4}}>
                <MyTextField
                  type='password'
                  placeholder={messages['common.password']}
                  label={<IntlMessages id='common.password' />}
                  name='password'
                  variant='outlined'
                  className={classes.myTextFieldRoot}
                />
              </Box>

              <Box
                mb={{xs: 3, xl: 4}}
                display='flex'
                flexDirection={{xs: 'column', sm: 'row'}}
                alignItems={{sm: 'center'}}
                justifyContent={{sm: 'space-between'}}
                fontSize={15}>
                <Box display='flex' alignItems='center'>
                  <Checkbox className={classes.checkboxRoot} />
                  <Box className={classes.textGrey} component='span'>
                    <IntlMessages id='common.rememberMe' />
                  </Box>
                </Box>
                <Box
                  color='primary.main'
                  component='span'
                  ml={{sm: 4}}
                  fontSize={15}
                  className={classes.pointer}
                  onClick={onGoToForgetPassword}>
                  <IntlMessages id='common.forgetPassword' />
                </Box>
              </Box>

              <Box
                mb={6}
                display='flex'
                flexDirection={{xs: 'column', sm: 'row'}}
                alignItems={{sm: 'center'}}
                justifyContent={{sm: 'space-between'}}>
                <Button
                  variant='contained'
                  color='secondary'
                  type='submit'
                  disabled={isSubmitting}
                  className={classes.btnRoot}>
                  <IntlMessages id='common.login' />
                </Button>

                <Box
                  ml={{xs: 0, sm: 4}}
                  mt={{xs: 3, sm: 0}}
                  color='text.secondary'
                  fontSize={15}>
                  <Box className={classes.textGrey} component='span' mr={2}>
                    <IntlMessages id='common.dontHaveAccount' />
                  </Box>
                  <Box component='span'>
                    <Link
                      to='/signup'
                      className={clsx(
                        classes.underlineNone,
                        classes.colorTextPrimary,
                      )}>
                      <IntlMessages id='common.signup' />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>

      <Box
        bgcolor={grey[100]}
        px={{xs: 6, sm: 10, xl: 15}}
        py={2}
        display='flex'
        flexDirection={{xs: 'column', sm: 'row'}}
        justifyContent='center'
        alignItems='center'>
        <Box
          component='span'
          className={classes.textGrey}
          mr={{sm: 4}}
          fontSize={15}>
          <IntlMessages id='common.orLoginWith' />
        </Box>
        <Box display='flex' alignItems='center'>
          <IconButton
            className={classes.iconButtonRoot}
            onClick={() =>
              Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Google,
              })
            }>
            <i className='zmdi zmdi-google' />
          </IconButton>
          <IconButton
            className={classes.iconButtonRoot}
            onClick={() =>
              Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Facebook,
              })
            }>
            <FacebookIcon />
          </IconButton>
        </Box>
      </Box>

      <InfoView />
    </Box>
  );
};

export default SigninAwsCognito;
