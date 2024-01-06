import { Typography, Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";
import { CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";
import { StripeInput } from "./StripeInput";
import { StripeElementType } from "@stripe/stripe-js";

interface Props {
    cardState: {elementError: {[key in StripeElementType]?: string}};
    onCardInputChange: (event: any) => void;
}

export default function PaymentForm({cardState, onCardInputChange}: Props) {
    const {control} = useFormContext();

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <AppTextInput 
                        name='nameOnCard'
                        label='Name on card'
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        onChange={onCardInputChange}
                        error={!!cardState.elementError.cardNumber}
                        helperText={cardState.elementError.cardNumber}
                        InputLabelProps={{shrink: true}}
                        InputProps={{inputComponent: StripeInput, inputProps: {component: CardNumberElement}}}
                        variant="outlined"
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        onChange={onCardInputChange}
                        error={!!cardState.elementError.cardExpiry}
                        helperText={cardState.elementError.cardExpiry}
                        InputLabelProps={{shrink: true}}
                        InputProps={{inputComponent: StripeInput, inputProps: {component: CardExpiryElement}}}
                        variant="outlined"
                        id="expDate"
                        label="Expiry date"
                        fullWidth
                        autoComplete="cc-exp"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        onChange={onCardInputChange}
                        error={!!cardState.elementError.cardCvc}
                        helperText={cardState.elementError.cardCvc}
                        InputLabelProps={{shrink: true}}
                        InputProps={{inputComponent: StripeInput, inputProps: {component: CardCvcElement}}}
                        variant="outlined"
                        id="cvv"
                        label="CVV"
                        fullWidth
                        autoComplete="cc-csc"
                    />
                </Grid>
            </Grid>
        </>
    );
}